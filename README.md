This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
This command will install all node_modules necessary for the web application to be able to start.

This command is required to be run first before executing npm start.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

This command will execute the tests that have been written for the web application.

## Demonstrations

### Step 1 Demonstration
A demonstration of input 1,1 and also input of 2,1,1 which results in error feedback

![Demo of error message feedback](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/error_feedback_demo.gif)

### Step 2 Demonstration
After removing the error throwing code, we have the following output when a user inputs more than 2 inputs.
The below demo inputs 3,1,1

![Demo of 3,1,1 input](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/demo_multiple_input.gif)

### Step 3 Demonstration
Adding support of multiline input, this is a demonstration of inputing in 1234\n2345

![Demonstration of input 1234\n2345](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/newline_support.gif)


### Step 4 Demonstration
Adding support of error feedback when the user attempts to input a negative number. In this video we input 1,-1,-2 and receive error feedback

![Demonstration of input 1,-1,-2](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/negative_number_error_support.gif)

### Step 5 Demonstration
Adding support for filtering out numbers that are larger than one thousand in the input field. In this video we input 2,1001,6 and receive 8 as the result.

![Demonstration of input 2,1001,6](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/filter_numbers_over_thousand.gif)

### Step 6 Demonstration
Adding support for a custom delimiter. In this video we input //#\n2#5 which should result in 7

![Demonstration of input //#\n2#5](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/single_custom_delim.gif)

### Step 7 Demonstration
Added support for a multi character custom delimiter for the input. In this video we input //[``***``]\n11``***``22``***``33 which should result in 66

![Demonstration of input //[***]\n11***22***33](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/multichar_custom_delim.gif)

### Step 8 Demonstration
Added support for many multi character custom delimiters for input. In this video we input //[``*``][!!][r9r]\n11r9r22*hh*33!!44 which should result in 110

![Demonstration of input //[``*``][!!][r9r]\n11r9r22*hh*33!!44](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/many_multichar_custom_delim.gif)


## Extra Projects

### Supporting Subtraction, Multiplication, and Division
It was very simple to add support for other math operations. All that was needed was to add a function to perform the specific operation. Then afterwards all the tests needed to be updated to now specify which operation they were performing. Below are demonstrations of each operation that was added

#### Subtraction Operation
![Demonstration of subtraction](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/subtraction_demo.gif)

#### Multiplication Operation
![Demonstration of multiplication](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/multiplication_demo.gif)

#### Division Operation
##### Simple Division
![Demonstration of division](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/division_demo.gif)

##### Division by Zero Error
![Demonstration of division by zero](https://github.com/dillonreedy/R365_Calculator/blob/master/demo_gifs/division_by_zero_demo.gif)
