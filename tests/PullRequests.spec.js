const { test, expect } = require('@playwright/test');
const PullRequestPage = require('../models/PullRequest.page');
const csv = require('@fast-csv/format');

test('pull request test', async ({ page }) => {
  let pullRequestPage = new PullRequestPage(page);

  await pullRequestPage.navigate()

  let titleList = [await pullRequestPage.getTitlePRList()]
  let datesList = [await pullRequestPage.getDateList()]
  let authorList = [await pullRequestPage.getAuthorList()]

  while(await pullRequestPage.clickNextButton() == true)
  {
    // Pause some time to get results in the next page in the grid
    await page.waitForTimeout(3000);
    titleList.push(await pullRequestPage.getTitlePRList())
    datesList.push(await pullRequestPage.getDateList())
    authorList.push(await pullRequestPage.getAuthorList())
  }
  const fs = require('fs');

let customList = []
for (let j = 0; j < titleList.length; j++) {
  for (let i = 0; i < titleList[j].length; i++) {
    var objectValue1 = {};
    objectValue1['PR NAME'] = titleList[j][i];
    objectValue1['CREATED ON'] = datesList[j][i];
    objectValue1['AUTHOR'] = authorList[j][i];
    customList.push(objectValue1)
  }
}
  
  const myJSON = JSON.stringify(customList).replaceAll("},","\n").replaceAll("{", "").replaceAll("}]", "");

  fs.writeFile('./PR.csv', `${myJSON}`, err => {
    if (err) {
      console.error(err);
    }
  })
}); 

test('pull request API call', async ({ request }) => {
  const response = (await request.fetch('https://github.com/appwrite/appwrite/pulls'))
  const responseBody = await response.json()
 

})