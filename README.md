# Assignment
Code challenge:
Create a react application (use CRA) that you can use to search peoples' estimated age based on their name. The search input
should support a comma separated list of names. Use https://agify.io/ to fetch the results,
there's no need for any authentication. 
The layout should consist of 2 tabs: one for the search and one for the results. 
The results should be a list of the results with the names sorted alphabetically vertically, i.e.:
Annie: 36
Mary: 23
Olaf: 77


Example layout:
----------------------
| *Search* | Results |
---------------------------------------
|                                     |
|                                     |
|          Seach view                 |
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |

----------------------
| Search | *Results* |
---------------------------------------
|                                     |
|          Results view               |
|    Annie: 36                        |
|    Mary: 23                         |
|    Olaf: 77                         |
|                                     |
|                                     |
|                                     |



Some rules:
* Read the assignment and these rules carefully
* Use max 2 hours for this. Stop and send whatever you have completed at this point. This is a hard deadline.
* Use whatever UI library you prefer (react-bootstrap, material-ui, styled-components, custom ui etc.)
* Split the search and result display into their own components: <Search> and <Results>
* Use react functional components only
* Highly recommended: Use react context api to store & read the results. Where you fetch the data is up to you

Evaluation:
1. Functionality
2. Following specifications
3. Code style
4. Styling - if using 3rd party ui libs like material-ui there's no need to customize their look

When returning the code please write a few words about the time spent. If you e.g. spent most of
the time styling the page or solving a certain issue. 


# My comments:
Most of my time went trying to set up React Router and styling with React Bootstrap. Reason is that I haven't use them that much.

Also I did not use useContext hook, because I'm not familiar with it and didn't have time to read the docs while doing the challenge :)
