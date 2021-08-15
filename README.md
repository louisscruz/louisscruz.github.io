# Louis Cruz

This is the repo for the personal website of Louis Cruz.

## Development

### Workflow

`master` is the primary branch.
`main` has to be used for the GitHub Pages branch.
All pushes will trigger the CI workflow.
On merges to `master`, the application will be built and deployed automatically.

### Commits

All commits are handled through `commitizen`, following the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) specification.
CI will validate that all commits obey the pattern before proceeding with other CI checks.

To make a commit, add your changes as usual, then run `yarn commit`.
This will walk you through a series of questions which will then automatically generate a commit with a description for you.
