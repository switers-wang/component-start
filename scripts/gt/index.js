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
        'scripts/config.js',
        'scripts/dev.js',
        'template',
        'src',
        '.babelrc',
        '.editorconfig',
        '.gitignore',
        '.npmrc',
        'LICENSE',
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
