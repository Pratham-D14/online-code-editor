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

  html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample HTML Page</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }
            .highlight {
                background-color: #f0f8ff;
                padding: 10px;
                border-left: 4px solid #007acc;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Welcome to Monaco Code Editor</h1>
            <p>This is a sample HTML page with embedded CSS.</p>
        </header>
        
        <main>
            <section class="highlight">
                <h2>Features</h2>
                <ul>
                    <li>Multi-language support</li>
                    <li>Syntax highlighting</li>
                    <li>Code execution</li>
                    <li>Modern interface</li>
                </ul>
            </section>
            
            <section>
                <h2>Try It Out!</h2>
                <p>Edit this HTML and click "Run" to see the results.</p>
            </section>
        </main>
    </body>
    </html>`,

  css: `/* CSS Example - Modern Card Design */
    .card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 24px;
    margin: 16px;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: -0.025em;
    }

    .card-content {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    }

    /* Responsive design */
    @media (max-width: 768px) {
    .card {
        margin: 8px;
        padding: 16px;
    }
    
    .card-title {
        font-size: 1.25rem;
    }
    }

    /* Animation utilities */
    @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
    }`,

  json: `{
    "name": "monaco-code-editor",
    "version": "1.0.0",
    "description": "A beautiful multi-language code editor built with Monaco Editor",
    "author": {
        "name": "Code Editor Team",
        "email": "team@codeeditor.dev"
    },
    "features": [
        "Multi-language support",
        "Syntax highlighting",
        "Code execution",
        "Dark/Light themes",
        "Responsive design"
    ],
    "supportedLanguages": {
        "frontend": ["javascript", "typescript", "html", "css"],
        "backend": ["python", "java", "cpp"],
        "data": ["json"]
    },
    "configuration": {
        "defaultTheme": "vs-dark",
        "fontSize": 14,
        "lineHeight": 1.6,
        "enableMinimap": true,
        "wordWrap": true
    },
    "stats": {
        "totalLines": 1000,
        "languages": 8,
        "themes": 2
    }
    }`,

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

  cpp: `// C++ Example - Vector Operations and Classes
    #include <iostream>
    #include <vector>
    #include <algorithm>
    #include <string>

    class MathOperations {
    private:
        std::vector<int> numbers;
        
    public:
        // Constructor
        MathOperations(const std::vector<int>& nums) : numbers(nums) {}
        
        // Calculate sum
        int sum() const {
            int total = 0;
            for (int num : numbers) {
                total += num;
            }
            return total;
        }
        
        // Find maximum
        int findMax() const {
            return *std::max_element(numbers.begin(), numbers.end());
        }
        
        // Find minimum
        int findMin() const {
            return *std::min_element(numbers.begin(), numbers.end());
        }
        
        // Calculate average
        double average() const {
            return static_cast<double>(sum()) / numbers.size();
        }
        
        // Sort numbers
        void sortNumbers() {
            std::sort(numbers.begin(), numbers.end());
        }
        
        // Display numbers
        void display() const {
            std::cout << "Numbers: ";
            for (int num : numbers) {
                std::cout << num << " ";
            }
            std::cout << std::endl;
        }
    };

    int main() {
        std::vector<int> data = {64, 34, 25, 12, 22, 11, 90};
        MathOperations math(data);
        
        std::cout << "=== Math Operations Demo ===" << std::endl;
        math.display();
        
        std::cout << "Sum: " << math.sum() << std::endl;
        std::cout << "Average: " << math.average() << std::endl;
        std::cout << "Max: " << math.findMax() << std::endl;
        std::cout << "Min: " << math.findMin() << std::endl;
        
        math.sortNumbers();
        std::cout << "After sorting:" << std::endl;
        math.display();
        
        return 0;
    }`,
};
