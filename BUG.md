Issue: Unable to view News feed using /qatest link

Description: Unable to view News feed using /qatest link when cookies are present

Note: After step 3 if we clear the cookies and hit the /qatest URL which is in 4th step, we are able to view the landing page which works as the same way in this link https://osa-web.t-cg.co.uk.

Please find the screenshot for reference in the cypress report.

Steps to reproduce:
1. Navigate to URL https://osa-web.t-cg.co.uk
2. Search for B16 8PE and then scroll down to Contact Group and click it to select that organisation
3. We can find /news section and News feed with one entry 'November 2021' 
4. Go to https://osa-web.t-cg.co.uk/qatest

Actual result: The same News feed page is displayed but it is broken, and no news appears.

Expected result: News feed page should be displayed with data.



