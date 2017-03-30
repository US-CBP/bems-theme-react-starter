set NODE_ENV=development
PATH=C:\ProgramData\Oracle\Java\javapath;C:\Users\Public\CBP-Apps\gimp-2.8\bin;C:\Users\Public\CBP-Apps\Oracle11g\product\11.2.0\client_1\bin;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\Enterprise Vault\EVClient\;C:\TEMP\selenium;C:\Program Files (x86)\Java\jre1.8.0_91\bin;C:\Program Files\Java\jre1.8.0_91\bin;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\Users\Public\CBP-Apps\UTIL;C:\Users\Public\CBP-Apps\node6

rem npm config set proxy http://proxy.cbp.dhs.gov:8080
rem npm config set https-proxy http://proxy.cbp.dhs.gov:8080
echo open the browser and type http://localhost:9010 to start storybook
npm run storybook
