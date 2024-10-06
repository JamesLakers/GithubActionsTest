const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {

    const bucket = core.getInput('bucket', { require: true });
    const bucketRegion = core.getInput('bucket-region', { require: false });
    const distFolder = core.getInput('dist-folder', { require: true });

    const s3url = `s3://${bucket}`;
    //exec.exec(`aws s3 sync ${distFolder} ${s3url} --region ${bucket}`);

    core.notice(`aws s3 sync ${distFolder} ${s3url} --region ${bucket}`);
    core.notice('Hello from custom javascript action');
}

run();