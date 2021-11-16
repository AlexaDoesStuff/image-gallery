# Technical Exercise: Image Gallery
Responsive image gallery with auto search indexing.

Repository for Alexa Javellana's Technical Exercise: Image Gallery

Static render 11/16 https://affectionate-wozniak-f40a35.netlify.app/

## Project Requirements

Image Gallery Page
1) **Search Capabilities**
  - The user should have the ability to enter text into a search field and see images that match the entered text.
  - Assume that the input will run against all photo object values for simplicities sake. 
2) **Image Grid**
  - Images will default appear as thumbnails on iteratable pages
3) **Modal Behavior**
  - On clicking an image on in image grid, a modal will appear displaying stored metadata 
  - Via wireframe, **editable fields** within the image are 
    - **Title**
    - **Description**
    - **Public Domain?** 
  - Clicking **Save** on the modal window will persist changes onto the JSON
  - Clicking **Cancel** on the modal window will persist changes onto the JSON 
  - Let's also assume that **pressing "X" or closing out of the window** on clicking an area outside will **cancel changes** as well 
5) **Pagination**
  - < > Arrows will increase/decrease page by one 
  - << >> Arrows will set the current page either to the first or last 

6) Additional Features if Time Allots 
  - Choose amount of images that appear on each page 
 
## Commit Style
To track feature commits, commits will be commited under the following set standards:
```
ITH-## | feat/rebase/bug/style : short message about the code in this commit 
```

Where ## will correspond from a number 00 - 07, where numbers 01 - 06 correspond to the above features. For example, if the below commit is made
```
ITH-O1 | feat : html formatting, change value behavior linked to input 
```
This means that the code committed under this commit is code that relates to the **Search Capabilities** task, where a new feature was added that probably has something to do with HTML formatting and change values. 

## Current Bugs/Findings 
- Auto indexing from keywords in input will cause multiple cases to be implemented
  - If the current page of the current search exceeds the total pages for a new search automatically captured, the page must reset to 0 
  - The page must reset to 0 on any new search 
- Pages are automatically created on basis that at all times 8 imgs maximum will be shown on each page
- The **displaying images** section on the top right corner must account for cases when
  - Total images are less than the minimum 8 
  - Range must be calculated if there are eight images or more 

## Unit Testing
Jest + Enzyme 
Minimum of two simple tests to check default behaviors
