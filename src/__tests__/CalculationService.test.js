import CalculationService from '../Services/CalculationService';

describe('Addition Tests', () => {
    describe('Service Calculation Testing Step 1', () => {
        it('Input 10,20 results in 30', () => {
            expect(CalculationService.calculate({ input: "10,20", operation: "+" } )).toBe(30);
        });

        it('Input 20 results in 20', () => {
            expect(CalculationService.calculate({ input: "20", operation: "+" } )).toBe(20);
        });

        it('Input 1,5000 results in 1', () => {
            expect(CalculationService.calculate({ input: "1,5000", operation: "+" } )).toBe(1);
        });

        it('Input 1,1,1 results in 3', () => {
            expect(CalculationService.calculate({ input: "1,1,1", operation: "+" } )).toBe(3);
        });

        it('Input 4,-3 results in error being thrown', () => {
            expect(() => CalculationService.calculate({ input: "4,-3", operation: "+" })).toThrow();
        });

        it('Input "" results in 0', () => {
            expect(CalculationService.calculate({ input: "", operation: "+" })).toBe(0);
        });

        it('Input 5,tyty results in 5', () => {
            expect(CalculationService.calculate({ input: "5,tyty", operation: "+" })).toBe(5);
        });
    });

    describe('Service Calculation Testing Step 2', () => {
        it('Input 1,2,3,4,5,6,7,8,9,10,11,12 results in 78', () => {
            expect(CalculationService.calculate({ input: "1,2,3,4,5,6,7,8,9,10,11,12", operation: "+" } )).toBe(78);
        });
    });

    describe('Service Calculation Testing Step 3', () => {
        it('Input 1\n2,3 results in 6', () => {
            expect(CalculationService.calculate({ input: "1\n2,3", operation: "+" })).toBe(6);
        });
    });

    describe('Service Calculation Testing Step 4', () => {
        it('Input -1 results in error being thrown', () => {
            expect(() => CalculationService.calculate({ input: "-1", operation: "+" })).toThrow();
        });

        it('Input 1,-1,-1 results in error being thrown', () => {
            expect(() => CalculationService.calculate({ input: "1,-1,-1", operation: "+" })).toThrow();
        });

        it('Input 2\n-1,-2 results in error being thrown', () => {
            expect(() => CalculationService.calculate({ input: "2\n-1,-2", operation: "+" })).toThrow();
        });
    });

    describe('Service Calculation Testing Step 5', () => {
        it('Input 2,1001,6 results in 8', () => {
            expect(CalculationService.calculate({ input: "2,1001,6", operation: "+" })).toBe(8);
        });
    });



    describe('Service Calculation Testing Step 6', () => {
        it('Input //#\n2#5 results in 7', () => {
            expect(CalculationService.calculate({ input: "//#\n2#5", operation: "+" })).toBe(7);
        });

        it('Input //,\n2,ff,100 results in 102', () => {
            expect(CalculationService.calculate({ input: "//,\n2,ff,100", operation: "+" })).toBe(102);
        });

        it('Input //+\n2+3 results in 5', () => {
            expect(CalculationService.calculate({ input: "//+\n2+3", operation: "+" })).toBe(5);
        });
    });

    describe('Service Calculation Testing Step 7', () => {
        it('Input //[***]\n11***22***33 results in 66', () => {
            expect(CalculationService.calculate({ input: "//[***]\n11***22***33", operation: "+" })).toBe(66);
        });

        it('Input //[\n\n]\n1\n\n2\n\n3 results in 6', () => {
            expect(CalculationService.calculate({ input: "//[\n\n]\n1\n\n2\n\n3", operation: "+" })).toBe(6);
        });

        it('Input //[,,,]\n1,,,2,,,3 results in 6', () => {
            expect(CalculationService.calculate({ input: "//[,,,]\n1,,,2,,,3", operation: "+" })).toBe(6);
        });

        it('Input //[,]\n1,2,3 results in 6', () => {
            expect(CalculationService.calculate({ input: "//[,]\n1,2,3", operation: "+" })).toBe(6);
        });
    });


    describe('Service Calculation Testing Step 8', () => {
        it('Input //[,,][,,,]\n1,,2,3,,,4 results in 10', () => {
            expect(CalculationService.calculate({ input: "//[,,][,,,]\n1,,2,3,,,4", operation: "+" })).toBe(10);
        });

        it('Input //[*][!!][r9r]\n11r9r22*hh*33!!44 results in 110', () => {
            expect(CalculationService.calculate({ input: "//[*][!!][r9r]\n11r9r22*hh*33!!44", operation: "+" })).toBe(110);
        });
    });
});

describe('Subtraction Tests', () => {
    it('Simple input 1,2,3 results in -4', () => {
        expect(CalculationService.calculate({ input: "1,2,3", operation: "-"})).toBe(-4);
    });
});

describe('Multiplication Tests', () => {
    it('Simple input 1,2,3 results in 6', () => {
        expect(CalculationService.calculate({ input: "1,2,3", operation: "×"})).toBe(6);
    });
});

describe('Division Tests', () => {
    it('Simple input 2,2 results in 1', () => {
        expect(CalculationService.calculate({ input: "2,2", operation: "÷"})).toBe(1);
    });

    it('Dividing by zero results in error', () => {
        expect(() => {
            CalculationService.calculate({ input: "2,0", operation: "÷"})
        }).toThrow();
    });
});