# file-manager

### Cross-check review:
1. Make sure that you have **v18 LTS Node** installed on your computer
1. git clone https://github.com/ivanKoliada/file-manager.git
1. git checkout file-manager

### How to use?:
* The program is started by npm-script start in following way:
  npm run start -- --username=your_username
* The program is started by terminal command in following way:
  node src/ --username=your_username
  
> **NOTE:** `USE * INSTEAD OF A SPACE IN FILENAME`  
```
 ❌ INCORRECTLY:   
 D:\file-manager\src\new folder\

 ✔️ CORRECTLY:  
 D:\file-manager\src\new*folder\
```
### List of operations and their syntax:
* cd path_to_directory  
  for example:
  * cd D:\file-manager\src\modules\commands
  * cd ..\folder
  * cd .\folder\folder
  * cd D:\folder*name\folder
* cat path_to_file  
  for example:
  * cat D:\file-manager\src\index.js
  * cat ..\file.txt
  * cat .\folder\file.txt
* add new_file_name  
  for example:
  * add file.txt
* rn path_to_file path_to_new_filename  
  for example:
  * rn D:\file-manager\src\index.js D:\file-manager\src\index2.js
  * rn file.txt file2.txt
  * rn .\folder\file.txt .\folder\file2.txt
* cp path_to_file path_to_new_directory 
  for example:
  * cp D:\file-manager\src\index.js D:\file-manager\
  * cp file.txt .\folder\
  * cp .\folder\file.txt .\
  * cp .\folder\file.txt ..\
* mv path_to_file path_to_new_directory
  for example:
  * mv D:\file-manager\src\index.js D:\file-manager\
  * mv file.txt .\folder\
  * mv .\folder\file.txt .\
  * mv .\folder\file.txt ..\
* rm path_to_file  
  for example:
  * rm D:\file-manager\src\index.js
  * rm ..\file.txt
  * rm .\folder\file.txt
  * rm .\folder\folder
### Operating system info
* os --EOL Get EOL (default system End-Of-Line).
* os --cpus Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them).
* os --homedir Get home directory.
* os --username Get current system user name (Do not confuse with the username that is set when the application starts)
* os --architecture Get CPU architecture for which Node.js binary has compiled
### Hash calculation: 
* hash path_to_file
  for example:
  * hash D:\file-manager\src\index.js
  * hash ..\file.txt
  * hash .\folder\file.txt
### Compress and decompress operations:
* compress path_to_file path_to_destination  
  for example:
  * compress D:\file-manager\src\index.js D:\file-manager\src\index.js.br
  * compress .\folder\file.js D:\file-manager\file.br
  * compress ..\folder\file.txt D:\file.br
* decompress path_to_file path_to_destination  
  for example:
  * decompress D:\file-manager\src\index.js.br D:\file-manager\src\index.js
  * decompress .\folder\file.br D:\file-manager\file.txt
  * decompress ..\folder\file.br D:\file.js