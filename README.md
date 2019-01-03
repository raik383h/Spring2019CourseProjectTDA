# Spring2019CourseProjectTDA
The RAIK383H course project for TD Ameritrade during Spring semester 2019.

# Running the C# API
Open the `TDAProject.sln` solution file in [Visual Studio](https://visualstudio.microsoft.com/downloads/). Right-click the `Web` project, and hit "Set as StartUp Project". Then hit the green run button in the toolbar. 
> If you don't have the .NET Framework 4.7.1 SDK installed, you can download the developer pack from [here](https://dotnet.microsoft.com/download/visual-studio-sdks?utm_source=getdotnetsdk&utm_medium=referral) 

# Running the Angular UI
Make sure you have Node installed on your computer. You can test this by typing `node -v` in a terminal (we recommend either Git Base or Powershell for Windows). You should have version 8.9.x or 10.x.x installed. If the command is not recognized or you have an older version, download and install NodeJS from [here](https://nodejs.org/en/).  

Ensure you have npm installed--this should be installed already if NodeJS is installed. You can verify by typing `npm -v` in a terminal. You should have at least v5.5.1 installed.
> If you cannot use the npm command, it likely did not get added to your [path](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10)

Navigate to the project using the terminal, and then go to `app > tda-project-ui`.

Install the necessary packages to run the project from that directory with the command `npm install`.

Run the UI project by typing `ng serve`. This command launches the server, watches your files, and rebuilds the app as you make changes to those files. Navigate to `http://localhost:4200/` to see your running front-end.

For editing the Angular front-end, we recommend using [Visual Studio Code](https://code.visualstudio.com/download).