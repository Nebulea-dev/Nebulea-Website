import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
    return `
                 R RR RR                   sumfetch
              R RRRRRRRR R          R     -----------
 R RR       R RRRRRRRRRRRRR R      RR      ${config.name}
rR RRR    R RRRRRRRRRRRRRRRRR R   RRR R    <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
RRR RR   RRRRRRRRRRRRRRRRRRRRRRR  RRRRR   爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
 RRRRR  RRRRRRRRRRRRRRRRRRRRRRRR  RRRR    -----------
  RRR RRRRRRRRRRRRRRRRRRRRRRRRRRRR RR      CONTACT
    R  RRRRRRRRRR=  RR = RRRRRRRRRRR       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
     RRRRRRRRRRRR=  RR = RRRRRRRRRR        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
      RRRRRRRRRRR   RR   RRRRRRRRRR        <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     RR==RRRRRRRRRRRRRRRRRRRRRR===RR      -----------
     RR =  ==RRRRRRR  RRRRRR==  = RR      󱠡 ABOUT
      RR =     ===========     = RR        Computer Science student at <u><a href="${config.school}" target="_blank">ENSIMAG</a></u>
       RR                        R         Interning at <u><a href="${config.job}" target="_blank">Allegro DVT</a></u>
        R                       R         󰅩 Aspiring reverse engineer, part-time coder and full-time problem solver
         R                                
`;
};

export default sumfetch;
