# Image Gallery Week02 Project

## Requirements

### 🎯 Implement responsive design using media queries to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).

I've designed initially for mobile first, and then used media queries for `min-width: 1025px` for desktop. The decision to use 1025px instead od 800px excludes very old 3:4 desktop monitors with resolutions like 1024 x 768 and will force these to display a mobile version of the site. However 1025 also excludes new ipad models in portrait mode. This is a worthwhile tradeoff in my opinion as newer tablets will be most likely the more used user device of the two, and the tradeoff of a mobile display on old tech isn't a severe user issue in this case.

I have also added media quieries for ultrawide monitors with `min-width: 2800px`.


### 🎯 Ensure all images have appropriate alt text attributes for accessibility.

All of the image gallery images have appropriate alt text taken from the photographers and also use the photographer's name in the alt text.

### 🎯 Correctly use event handlers to switch images based on user interactions.

You can switch through images by using the arrow keys, by clicking on each thumbnail image, or by focusing each thumbnail image and pressing enter.

## Stretch Requirments

### 🏹 Use 'srcset' to specify which image will be used based on the size of the screen for optimal viewing experience.
When an image is loaded as the main image the correct srcset is applied and the image loaded will change on each device. To provide a better user experience on large resolution devices without high performance hardware or internet speed I have implemented a "loading" div in javascript that hides all image content until it is fully loaded. Without this the images at first load distorted and warped and then correct once the page has fully loaded which would look unproffessional.

### 🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.
I have included `aria-hidden` on the loading element as it is not nessecary to show for screen readers. I have also used `aria-live` with assertive setting on the main large image so the alt text is read out as the image is loaded. Usually I would use the polite setting but for this particular use case I think assertive is more appropriate as once a user has selected an image, the image should then imediately move to being the main focus.

To facilitate a better user experience for screen reader users I have added `aria-label` through javascript to the thumbnails for each image. This overrides the default alt text being read and instead reads out the image number and photographer and prompts the user to select the image to load it, where the alt text for the actual image will then be read out using `aria-live`. Whilst there is an argument for keeping the alt text on the thumbnails, and i would do so for most other websites - I feel this approach is more appropriate for an image gallery website.

### 🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.
Arrow keys can be used to switch between images as mentioned above. This is implemented with javascript event listeners and functions that move a pointer along, unless we are at the start of end of the image list.

### 🏹 Develop media queries for multiple screen sizes.
As mentioned above the website is designed for mobile-first and then media queries are implemented for both standard desktop resolutions as well as ultrawide screens.

## Reflections

Given more time on the project I would have liked to implement on-screen buttons to navigate left and right through the images. This would be a realtively simple implementation utilizing the javascript functions already built and using button click events to call them in the same way arrow key presses do currently.

I would also have liked to fix the image thumbnails horizontal scrollbar visually for chrome and webkit based browsers. Currently in firefox the scrollbar works as I would like: the images take up the full height with no scrollbar showing, and then when the user hovers over the thumbnails element the scrollbar appears on top of the thumbnail images - leaving the images in place. On chrome and webkit browsers however, the scrollbar will appear on hover and push the images up to make space for the scrollbar inside the thumbnails element. This would have previously been an easy fix using the `overflow: overlay` css property, but unfortunately this was discontinued a year ago and is no longer supported by chrome or edge browsers. The recommendation is to use `scrollbar-gutter` instead but in this specific case it is not appropriate as it can only reserve space for the scrollbar (not allow it to position over the element). If given more time and a better understanding of javascript libraries I would have liked to implement a javascript scrollbar replacement library such as SimpleBar, which replaces the default browser scrollbar for specific elements in a performant way, and allows the functionality I want across all browsers.

I would also like to have implemented more aria-labels functionality, but struggled to think of additional appropriate use cases for the labels within the website design and specification.