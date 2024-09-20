*Unique Integer Processor*

*Table of Contents*

Overview

Features

Prerequisites

Installation

Repository Structure

Usage

Running the Application

Comparing Output Files

Contributor


*Overview*


This project processes a list of integers from an input file and generates an output file with unique integers, sorted in ascending order. The project is designed to handle a variety of input cases, including lines with extra spaces, non-integer values, and multiple integers per line.

*Features*


* Reads integer values from an input file, ignoring invalid or non-integer data.
* Outputs a file with unique integers sorted in ascending order.
* Handles input variations such as whitespace, empty lines, and invalid entries.
* Efficient integer tracking using a Set to ensure uniqueness.

*Prerequisites*


* Node.js (v12 or higher)
* A terminal or command-line interface
* A text editor for modifying files (optional)

*Installation*

Clone the repository:
git clone https://github.com/yourusername/unique-integers-project.git


*Repository Structure*

unique-integers-project/

├── sample_input_for_students/      # Directory containing sample input files

├── sample_results/                 # Directory where output files will be saved

├── src/                            # Directory containing source code

│   └── uniqueInt.js                # Main application logic

├── README.md                       # Project documentation


*Usage*

1. To process a sample input file and generate the output file, run the following command:


node src/uniqueInt.js sample_input_for_students/sample_01.txt

2. The output file will be created in the sample_results folder.


*Running the Application*


To run the application, use the following command:


node src/uniqueInt.js sample_input_for_students/sample_01.txt


*Comparing Output Files*


You can use the diff command to compare the generated output with an expected result:


diff sample_results/sample_01.txt_results.txt expected_results/sample_01_expected.txt


*Contributor*

Peace KEZA ❤️


HAPPY CODING. 😘❤️
