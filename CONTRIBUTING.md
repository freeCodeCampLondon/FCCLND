# Contributor's Guide

We welcome and encourage pull requests from members of our Free Code Camp study group. Follow the steps below to get started:

1.  Find an issue that we need help with by filtering the issues by the [Help Wanted](https://github.com/artitudinale1/FCCLND/labels/help%20wanted) tag.
2.  Let us know that you want to help by posting a comment on the issue.
3.  If you need help or want to discuss further feel free to leave a message in our [![Join the chat at https://gitter.im/artitudinale1/FCCLND](https://badges.gitter.im/artitudinale1/FCCLND.svg)](https://gitter.im/artitudinale1/FCCLND?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).
4.  [Fork and clone](#forking-and-cloning-locally) the main repository
5.  Create a new branch named appropriately for the issue you are working on. e.g. `fix/mobile-responsive`, `feature/navbar`

    `git checkout -b type/branch-name`

6.  Work on the issue, committing to this new branch.
7.  When you have finished commit all your changes and [rebase from upstream](#rebasing-from-upstream)
8.  Push your branch up to your fork

    `git push origin type/branch-name`

## Forking and Cloning Locally

1.  Go to the main page for the repository: <https://github.com/artitudinale1/FCCLND>
2.  Click on the 'Fork' button in the upper right hand corner. [Detailed instructions here](https://help.github.com/articles/fork-a-repo).
3.  Once this is done you will be taken to your copy of the repository at `yourUserName/FCCLND`
4.	Clone your fork locally and `cd` into the new directory:

    `git clone https://github.com/yourUserName/FCCLND.git`

    `cd FCCLND`

4.  Add the main repository as a remote branch so that you can rebase later

    `git remote add upstream https://github.com/artitudinale1/FCCND.git`

5.  Create a new branch with a short name describing the issue you are working on. e.g.

    `git checkout -b branchName`

6.  Work on your issue, committing to this branch.

## Rebasing from Upstream

Before making your Pull Request you need to make sure that you are up to date with the main repository.

1.	Switch to the `master` branch

    `git checkout master`

2.	Update `master` to be inline with the main repository

    `git pull --rebase upstream master`

3.  (Optional) Push `master` to your fork for good measure. ()

    `git push origin master --force`

4.  Switch back to your branch (change `type/branch-name` to your branch name)

    `git checkout type/branch-name`

5.  Rebase your branch from master

    `git rebase master`

6.  Push your branch to your fork

    `git push origin type/branch-name`

7.  You are now ready to submit a Pull Request

## Submitting a Pull Request

1.  Submit a Pull Request making reference to the issue number in the description (not the title) e.g. \#12 (further guidance here: <https://help.github.com/articles/using-pull-requests/>)
