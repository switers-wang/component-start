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
        'scripts',
        'template',
        '.eslintrc',
        'scripts/dev.js',
        'template/index.html',
        'src',
        '.babelrc',
        '.editorconfig',
        '.gitignore',
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
