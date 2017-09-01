/**
 * Created by wangxupeng on 2017/9/1.
 */

import Listr from 'listr';

const sleep = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

const copyFiles = (options) => {
    const { presets } = options;
    const files = [
        'mock-server',
        'scripts',
        'template',
        'src',
        '.eslintrc',
        '.babelrc',
        '.gitignore',
        '.editorconfig',
        'package.json',
    ];
    return async() => {
        await sleep(500);
        await presets.copyFiles(files);
    };
};

export const init = (options) => {
    return new Listr([
        {
            title: 'copy files',
            task: copyFiles(options),
        },
    ]);
};
