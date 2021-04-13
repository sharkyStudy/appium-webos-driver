import executeCmds from './execute';
import findCmds from './find';
import generalCmds from './general';
import elementCmds from './element';
import actionCmds from './action';
import mrcuCmds from './mrcu';

let commands = {};
Object.assign(
    commands,
    findCmds,
    executeCmds,
    generalCmds,
    elementCmds,
    actionCmds,
    mrcuCmds
);
export {commands};
export default commands;
