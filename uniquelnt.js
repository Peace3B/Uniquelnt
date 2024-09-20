const fs = require("fs");
const path = require("path");

class UniqueInt {
    // Process the input file and generate output file with unique sorted integers
    static processFile(inputFilePath) {
        const directory = "sample_results";
        const baseName = path.basename(inputFilePath, path.extname(inputFilePath)) + "_results.txt";
        const outputFilePath = path.join(directory, baseName);

        // Ensure the output directory exists
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        // Read input file and process data
        fs.readFile(inputFilePath, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }

            // Set to track unique integers
            const uniqueIntegers = new Set();

            // Split file content into lines and process each line
            const lines = data.split('\n');

            lines.forEach(line => {
                // Trim any whitespace and skip empty or invalid lines
                line = line.trim();
                if (!line) return;

                // Parse line as an integer
                const num = parseInt(line, 10);

                // Only add valid integers in the range [-1023, 1023]
                if (!isNaN(num) && num >= -1023 && num <= 1023) {
                    uniqueIntegers.add(num);
                }
            });

            // Convert set to array, sort it, and join into string for output
            const sortedUniqueIntegers = Array.from(uniqueIntegers).sort((a, b) => a - b).join('\n');

            // Write the result to the output file
            fs.writeFile(outputFilePath, sortedUniqueIntegers + '\n', (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                } else {
                    console.log(`Results written to: ${outputFilePath}`);
                }
            });
        });
    }
}

// Example usage
UniqueInt.processFile("sample_input_for_students/sample_01.txt");
// UniqueInt.processFile("sample_input_for_students/sample_02.txt");
// UniqueInt("sample_input_for_students/sample_03.txt");
// UniqueInt("sample_input_for_students/sample_04.txt");
// UniqueInt("sample_input_for_students/small_sample_input_01.txt");
// UniqueInt("sample_input_for_students/small_sample_input_02.txt");
// UniqueInt("sample_input_for_students/small_sample_input_03.txt");
// UniqueInt("sample_input_for_students/small_sample_input_04.txt");
