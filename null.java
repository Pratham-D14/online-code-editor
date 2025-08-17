// Java Example - Simple Calculator
    import java.util.Scanner;

    public class Calculator {
        
        public static void main(String[] args) {
            Calculator calc = new Calculator();
            
            System.out.println("=== Simple Calculator ===");
            System.out.println("Addition: " + calc.add(10, 5));
            System.out.println("Subtraction: " + calc.subtract(10, 5));
            System.out.println("Multiplication: " + calc.multiply(10, 5));
            System.out.println("Division: " + calc.divide(10, 5));
            
            // Demonstrate array operations
            int[] numbers = {1, 2, 3, 4, 5};
            System.out.println("Sum of array: " + calc.sumArray(numbers));
        }
        
        public double add(double a, double b) {
            return a + b;
        }
        
        public double subtract(double a, double b) {
            return a - b;
        }
        
        public double multiply(double a, double b) {
            return a * b;
        }
        
        public double divide(double a, double b) {
            if (b == 0) {
                throw new IllegalArgumentException("Division by zero!");
            }
            return a / b;
        }
        
        public int sumArray(int[] array) {
            int sum = 0;
            for (int num : array) {
                sum += num;
            }
            return sum;
        }
    }