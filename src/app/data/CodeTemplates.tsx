// Default code templates for different languages
export const codeTemplates: Record<string, string> = {
  javascript: `// JavaScript Example
    function greetUser(name) {
    console.log(\`Hello, \${name}! Welcome to the code editor.\`);
    return \`Greetings from \${name}\`;
    }

    // Call the function
    const result = greetUser("Developer");
    console.log(result);

    // Working with arrays
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    console.log("Doubled numbers:", doubled);`,

  typescript: `// TypeScript Example
    interface User {
    name: string;
    age: number;
    isActive: boolean;
    }

    function createUser(name: string, age: number): User {
    return {
        name,
        age,
        isActive: true
    };
    }

    const user: User = createUser("Alice", 30);
    console.log("User created:", user);

    // Generic function
    function getArrayLength<T>(arr: T[]): number {
    return arr.length;
    }

    console.log("Array length:", getArrayLength([1, 2, 3, 4]));`,

  python: `# Python Example
    def fibonacci(n):
        """Generate Fibonacci sequence up to n terms"""
        if n <= 0:
            return []
        elif n == 1:
            return [0]
        elif n == 2:
            return [0, 1]
        
        fib = [0, 1]
        for i in range(2, n):
            fib.append(fib[i-1] + fib[i-2])
        
        return fib

    # Generate first 10 Fibonacci numbers
    result = fibonacci(10)
    print(f"First 10 Fibonacci numbers: {result}")

    # List comprehension example
    squares = [x**2 for x in range(1, 11)]
    print(f"Squares of 1-10: {squares}")`,

  java: `// Java Example - Simple Calculator
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
    }`,
};
