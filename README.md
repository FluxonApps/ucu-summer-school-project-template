# Fluxon x UCU Bootcamp project template `💫🪐☄️`

Welcome to the Fluxon x UCU Bootcamp 2025! 👋👋👋

This is a Bootcamp project template. It contains minimal web app setup and doesn't contain anything related to your _actual_ project. You are going to be building your app on top of this template. Thus, please _change anything_ in this repository at your will in order to build your cool project! Start with this README - replace this with your project's title and description!

Overall, this README file is here to help you understand what we're dealing with, set up your machine for development, and provide some useful materials for learning web technologies.

---

Technologies used:

- [React](https://react.dev/) - UI framework/library
- [TypeScript](https://www.typescriptlang.org/) - strict types for JavaScript
- [Firebase](https://firebase.google.com/docs) - authentication functionality (Firebase Auth), database (Firestore), web app hosting (Firebase Hosting). Basically, it serves as the backend for our app
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - bundler, a tool that takes all the source code files and compiles them together to build the app 🛠️

## Development

Before starting your work on this project, we need to do a couple of steps to set up your tooling.

This list will help you set up your machine for local development.

### Prerequisites

Initial steps you might have already done during your study at UCU:

- You should have a GitHub account. A cool username is a requirement, too 😎
- Install Git: https://github.com/git-guides/install-git. Sending code updates over messengers might work, too; or not...
- Install a code editor or IDE, such as VSCode: https://code.visualstudio.com/Download
- Use a shell terminal (bash, zsh, whatever) during the development process. On MacOS and Linux, it is available for you out of the box. On Windows, you have to either install WSL (which is time consuming), or Git Bash. This answer contains some useful links: https://superuser.com/a/1763710

### Local development setup

Now, let's set up your machine for real development 👇

1. Clone this Git repository:

```shell
# 1. Copy Git repository URL: on the GitHub page of this repository, click the green `<> Code` button > `📋` button to the right of the repository url.


# 2. Find a place where you want this project to live at.
cd ~; mkdir -p Projects; cd Projects # If you don't have a better place to put this repo

# 3. Clone the repository.
git clone <REPOSITORY URL YOU COPIED>

# 4. Navigate into the repository folder.
cd <REPOSITORY NAME>
```

2. Install Node.js 22: https://nodejs.org/en/download/package-manager. You can use `nvm` as per the guide, or download a simple installer from that page.

3. Configure your editor to use ESLint and to run it on file save. This will ensure the code looks great for everyone the same way 💅

   - if using VSCode, run `sh -c scripts/configure-vscode.sh`. If encountering issues with `code` command not being available, follow this guide: https://claude.ai/share/084f7821-6d56-4407-90ea-8c8774381b8f.
   - if using any other IDE, start questioning your life decisions. Or just ask mentors for help 😇

4. Install the dependencies using NPM. We are using libraries and code that was already written by other devs.

```shell
npm install
```

5. Start the project!

```shell
npm run dev
```

6. Go to http://localhost:5173/ to see this wonderful project live

7. Open the project in VSCode (if haven't yet)

```shell
code .
```

8. Make changes to project files within the src/ folder to see them reflected on the page

9. You should be all set! Now you can start contributing to the project! 🤘

## Deployment

Hey, some of you might be interested in setting up the deployment of your team's app 👀🚀

You could do this manually, or via an automated GitHub Actions workflow. Just ask your mentor!

## Useful Materials

> Before you proceed with this section, **REMEMBER THERE ARE NO STUPID OR LAME QUESTIONS**. If you're feeling like you don't know something, this means there's room for improvement – so just say it out loud and your mentor or peers will help you! We're all here to learn something new ([even mentors!](https://github.com/user-attachments/assets/c0c34e3a-8c5b-4bd8-9a8e-41c66bacece5)), so let's actually have a great time together!!!

> No, seriously, if there's anything, no matter however "obvious" this thing feels to you, don't be shy asking about it. Otherwise we'll be sad a question died never seeing the world 🥀🥀🥀

Some useful links for learning stuff we're dealing with at Bootcamp:

Web basics, https://internetingishard.netlify.app/ - a GREAT website that can help you better understand HTML & CSS.

JavaScript: https://www.geeksforgeeks.org/introduction-to-javascript/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction, ask mentor for more.

React.js: official guide https://react.dev/learn, short hints https://devhints.io/react.

Firebase: official guide https://firebase.google.com/docs/web/setup.

Git: cheat sheet https://training.github.com/downloads/github-git-cheat-sheet.pdf.

TailwindCSS: official documentation https://tailwindcss.com/docs/styling-with-utility-classes.

The above list is incomplete, so if you need anything - you know [whom](https://github.com/FluxonApps/ucu-summer-school-project-template/assets/86969397/f93ff07b-f70e-476d-9ed5-14f25d474a53) to ask 😊

**Good luck!**
