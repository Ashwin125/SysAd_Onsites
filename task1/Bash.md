# Bash
You are given 3 text files in which data is represented in the form of a table.
The first file will have Name, Employee ID, and Phone Number as columns.
Second file will have Employee ID, Salary as columns.
Third file will have Email, Phone Number and their year of joining as columns.

Your task is to merge all the three files into one, avoiding duplicates i.e. the merged file will consist of the columns: Employee ID, Name, Phone Number, Salary, Department and year of joining. 

Also ensure that all the entries in the three files match with the final one. Finally, you have to write a script which takes a column name and it's entry as paramaters and replaces it with the third parameter. If multiple rows have the same values,
all of them should be replaced.

Note: There is no need to create boxes for tables, fields can be separated by tabs and rows by new lines.