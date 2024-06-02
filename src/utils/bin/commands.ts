// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the currently available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'neofetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately this is a fake terminal, we don't actually have directories..
SSDs are expensive you know!`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `'vi' is way too old to be supported, try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is sooooo outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. Why not try 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `You know what? just use 'vscode'.`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  return `The perfect text editor.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied. This incident will be reported.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████   █████          █████                ████                    
  ░░██████ ░░███          ░░███                ░░███                    
   ░███░███ ░███   ██████  ░███████  █████ ████ ░███   ██████   ██████  
   ░███░░███░███  ███░░███ ░███░░███░░███ ░███  ░███  ███░░███ ░░░░░███ 
   ░███ ░░██████ ░███████  ░███ ░███ ░███ ░███  ░███ ░███████   ███████ 
   ░███  ░░█████ ░███░░░   ░███ ░███ ░███ ░███  ░███ ░███░░░   ███░░███ 
   █████  ░░█████░░██████  ████████  ░░████████ █████░░██████ ░░████████
  ░░░░░    ░░░░░  ░░░░░░  ░░░░░░░░    ░░░░░░░░ ░░░░░  ░░░░░░   ░░░░░░░░ 

Type 'help' to see the list of available commands.
Type 'neofetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
