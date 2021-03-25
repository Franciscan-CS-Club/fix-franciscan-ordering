# Fix Franciscan Ordering

This is a Chrome/Firefox Extension which will make the Franciscan catering website better, hopefully adding additional features!

If you have a feature that you want to add to the extension/website, use [the discussions tab](https://github.com/Franciscan-CS-Club/fix-franciscan-ordering/discussions). If you see a feature you like, upvote it!

We are not associated with Parkhurst or Catertrax in any way, nor do they endorse this extension! Use it at your own risk!



# Features currently implemented:
- Change checkboxes (which usually allow multiple selections) into radio buttons (which only allow one selection) - @AaronBangs
- Added small animations and quality of life improvements - @TJJP

---

## For the pr0gr4mm3r5:

### Setting up the development environment

To contribute to this extension, first fork the repo and clone your fork:
```bash
git clone https://github.com/your-username/fix-franciscan-ordering
cd fix-franciscan-ordering
```
Add the upstream branch and pull any new changes:
```bash
git remote add upstream https://github.com/Franciscan-CS-Club/fix-franciscan-ordering
git pull upstream main
```
You're ready to begin!

### Making changes

To make changes, first, pull any changes from upstream:
```bash
git pull upstream main
```

Then, start a new branch to work at (replacing `branch-name` with a name for the branch):
```bash
git checkout -b branch-name
git push -u origin branch-name
```
Make your changes, commit and push them:
```bash
git add -A
git commit -m "Commit message"
git push
```

Then, once you've finished making and testing your changes, create a pull request on Github. After being reviewed, your changes will be added!


Note - make sure to return to the main branch when you're done!
```
git checkout main
```
