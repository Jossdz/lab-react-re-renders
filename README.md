![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React re-renders

## Introduction

![thai_style_chicken_noodle_soup_pieces_recipe_web](https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15441/REDESIGN-ReactNativePerformance-Luke_Social-2d4e17555bff22e44357e1311f309dba.png)

We've learned that even when react is pretty fast, there's situatons where expensive components render to often causing performance issues. You already know how to prevent a component to be re-rendered by lifting the expensive component or using React.memo, use both to avoid re-render onn this lab.

⚠️ Don't worry if the app take some time to render, it's ok since we try to simulate a performance issue.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "Completed lab"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1 - Counter with an expensive component

For the first iteration you will have to reduce the amount of times the expensive component renders. We havee a counter that can increase or increase by clicking on a couple of buttons, use the Chrome dev tools and the React profiler to identify the performance issue, then fix the issue with React.memo.

## Iteration 2 - List

In this exercise you have a list of elements and the ability to filter this list, your work now it's to avoid the re-render previous showed elements. When you pass from the filtered results to the entire list, some of the elements don't need to be re-rendered since they were already on the window.

Every card is being re-rendered as we type.

![](https://i.postimg.cc/5NwN85y8/ezgif-3-d2bf03f527ba.gif)

Once you add the necessary code to avoid the cards re-render you sould see the cards already printed not being rendered.

![](https://i.postimg.cc/TwzfDhXk/Captura-de-Pantalla-2021-02-08-a-la-s-1-33-21.png)

## Bonus

Use the wrapper component instead of React.memo to avoid both previous iterations re-renders.

Happy coding! 💙
