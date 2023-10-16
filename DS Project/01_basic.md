## how we are fetching data ? (source of data basically)
- from the glassdoor.com and linkedin

### how to scrape some data online ?

> two approaches :

     1. beutifulsoup
     
     2. selenium (glassdoor scrapper selenium)

    basically copy pasting the data

### glassdoor file editing : 
1. need to add google chrome (webdriver) path in the file
2. add path in the get_jobs function and change the function's path to "path" only
      
        executable_path="/Users/omersakarya/Documents/GitHub/scraping-glassdoor-selenium/chromedriver"
    updated code will be
        
        executable_path=path

3. edit the sleep time also
4. Not to forget about installing packages in the notebook (using below code in new cell)

         !pip3 install selenium
