# Contributor's Guide

We welcome and encourage pull requests from members of our Free Code Camp study group. Follow the steps below to get started:

1.  Find an issue that we need help with by filtering the issues by the [Help Wanted](https://github.com/artitudinale1/FCCLND/labels/help%20wanted) tag.
2.  Let us know that you want to help by posting a comment on the issue.
3.  If you need help or want to discuss further feel free to leave a message in our [![Join the chat at https://gitter.im/artitudinale1/FCCLND](https://badges.gitter.im/artitudinale1/FCCLND.svg)](https://gitter.im/artitudinale1/FCCLND?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).
4.  [Fork and clone](#forking-and-cloning-locally) the main repository
5.  Create a new branch named according to the issue you are working on. The name should be prefixed as in the below table:

    | Type               | Prefix            | Example                      |
    |---                 |---                |---                           |
    | Bug Fix            | `fix/`            | `fix/camper-height`          |
    | Enhancement        | `feature/`        | `feature/navbar`             |
    | Camper Data Update | `update/`         | `update/your-name`           |

    `git checkout -b type/branch-name`

6.  Work on the issue, committing to this new branch.
7.  When you have finished commit all your changes and [rebase from upstream](#rebasing-from-upstream)
8.  [Submit your Pull Request](#submitting-a-pull-request)
9.  Your Pull Request will be reviewed by members of the core team before being merged to the main repository. You may be asked to make further changes before the Pull Request is accepted.


## Forking and Cloning Locally

1.  Go to the main page for the repository: <https://github.com/artitudinale1/FCCLND>
2.  Click on the 'Fork' button in the upper right hand corner. [Detailed instructions here](https://help.github.com/articles/fork-a-repo).
3.  Once this is done you will be taken to your copy of the repository at `yourUserName/FCCLND`
4.	Clone your fork locally and `cd` into the new directory:

    `git clone https://github.com/yourUserName/FCCLND.git`

    `cd FCCLND`

4.  Add the main repository as a remote branch so that you can rebase later

    `git remote add upstream https://github.com/artitudinale1/FCCLND.git`


## Rebasing from Upstream

Before making your Pull Request you need to make sure that you are up to date with the main repository.

1.	Switch to the `master` branch

    `git checkout master`

2.	Update `master` to be inline with the main repository

    `git pull --rebase upstream master`

3.  (Optional) Push `master` to your fork for good measure.

    `git push origin master --force`

4.  Switch back to your branch (change `type/branch-name` to your branch name)

    `git checkout type/branch-name`

5.  Rebase your branch from master

    `git rebase master`

6.  Push your branch to your fork

    `git push origin type/branch-name`

7.  You are now ready to submit a Pull Request


## Submitting a Pull Request

1.  Once you have pushed all your changes to your fork navigate to the GitHub page for your fork.
2.  In the Branch menu, choose the branch that you were working on.
3.  On the right of the page click on **New Pull Request**
4.  Change the title to short description of the issue you have worked on
5.  In the Comment section write a brief outline of the changes you have made.
6.  End the comment with a new line with the text 'Closes' followed by a '#' and the issue number that your Pull Request relates to. e.g. `Closes #4`
7.  Click on **Create pull request**
8.  Your Pull Request will be reviewed by the core team before being merged into the main repository.
  
