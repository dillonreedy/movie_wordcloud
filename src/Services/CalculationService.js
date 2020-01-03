function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function getRegexAndNumbers(inputStr)
{
    var singleCharRegex = /\/\/([^])\n([^]*)/;
    var multiCharRegex = /\/\/(\[[^]*\])\n([^]*)/;
    var delims = [',', '\n'];

    if (multiCharRegex.test(inputStr))
    {      
      var customDelimsRegex = /\[([^]*?)\]/g;
      var customDelimsList = inputStr.match(multiCharRegex)[1];
      
      delims.push(...customDelimsList.match(customDelimsRegex));
      inputStr = inputStr.match(multiCharRegex)[2];
    }
    else if (singleCharRegex.test(inputStr))
    {
      delims.push(inputStr.match(singleCharRegex)[1]);
      inputStr = inputStr.match(singleCharRegex)[2];
    }

    delims = delims.map(delim => {
      return (delim.length === 1) ?  escapeRegExp(delim) : delim;
    });

    return [
        new RegExp(delims.join('|'),'g'),
        inputStr,
    ];
}

function detectNegativeNums(nums)
{
  var negativeNums = nums.filter(num => num < 0);

  if (negativeNums.length > 0)
    throw new Error(`The following negative numbers were in your input: ${negativeNums.toString()}`);
}

function calculate(payload)
{
  var [regex, extractedInputStr] = getRegexAndNumbers(payload.input);

  var nums = extractedInputStr.split(regex);
  
  nums = nums.map((num) => {
    return (!isNaN(num) && num) ? num : 0;
  });

  nums = nums.map(num => parseInt(num));

  detectNegativeNums(nums);

  nums = nums.map((num) => {
    return (num < 1001) ? num : 0;
  });

  return new Promise((resolve) => {
    return performOperation(payload.operation, nums);
  });

  //return performOperation(payload.operation, nums);
}

function performOperation(operation, nums)
{

  switch(operation) {
    case '+':
      return nums.reduce((acc, val) => { return acc+val; }, 0);
    case '-':
      if (nums.length === 0) return 0;
      var initialValueSub = nums[0];

      for (var i = 1; i < nums.length; i++)
        initialValueSub -= nums[i];
      
      return initialValueSub;
    case '×':
      return nums.reduce((acc, val) => { return acc*val; }, 1);
    case '÷':
      if (nums.length === 0) return 0;
      var initialValue = nums[0];

      for (var j = 1; j < nums.length; j++)
      {
        if (nums[j] === 0)
          throw new Error(`Cannot perform division by zero.`);
        
        initialValue = initialValue / nums[j];
      }

      return initialValue;

    default:
      throw new Error(`Operation ${operation} is not supported.`);
  }
}

export default {
    calculate: calculate
};