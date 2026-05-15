## Table of Contents

- [Testing and Validation](#testing-and-validation)
- [CSS Validation](#css-validation)
- [HTML Validation](#html-validation)
- [JavaScript Validation](#javascript-validation)
- [Lighthouse Validation](#lighthouse-validation)
  - [Lighthouse Score Reference](#lighthouse-score-reference)
- [Lighthouse Results Summary](#lighthouse-results-summary)
  - [Home Page](#home-page)
  - [About Page](#about-page)
  - [Locations Page](#locations-page)
  - [Menu Page](#menu-page)
  - [Tavern Code & FAQ Page](#tavern-code--faq-page)
  - [Gallery Page](#gallery-page)
  - [Contact Page](#contact-page)
  - [Feedback / Message Received Page](#feedback--message-received-page)
  - [Under Construction Page](#under-construction-page)
- [Performance Considerations and Impact](#performance-considerations-and-impact)
  - [Lazy Loading Performance Impact](#lazy-loading-performance-impact)
- [Conclusion](#conclusion)

# Testing and Validation

This document outlines the testing and validation processes carried out for *The Wayfarer’s Rest* project. These include HTML, CSS, and JavaScript validation, as well as performance, accessibility, best practices, and SEO testing using Lighthouse.

---

## CSS Validation

CSS validation was conducted using the **W3C CSS Validation Service** to ensure the stylesheet complies with current CSS standards. The project’s main stylesheet validated successfully with no errors found, confirming that the CSS is written correctly and follows best practices.

**CSS Validation Result:**
- *No errors found*

![Home Page Lighthouse Testing - Desktop Results](assets/images/testing/css-validation.png)

---

### HTML Validation
  
HTML validation was carried out using the **W3C Nu HTML Checker**. Every HTML page in the project was individually tested and returned no errors or warnings.  

The following pages were validated:

- Home Page  
- About Page  
- Menu Page  
- Locations Page  
- Gallery Page  
- FAQ / Tavern Code Page  
- Contact Page  
- Feedback / Message Received Page  
- Under Construction Page  

Initially, minor warnings were identified relating to:

"Section lacks heading"

This affected the Gallery section and the Home features section.  

These warnings were resolved by:

- adding hidden `<h2>` elements to the affected sections  
- implementing a `.visually-hidden` class to maintain accessibility without altering the visual design  

This ensured:

- correct semantic structure  
- improved accessibility  
- no impact on layout or user experience  

As each page produced a clean validation result after these fixes, screenshots are provided below as evidence.

**HTML Validation Results:**
- *No errors found*

![Home Page Validation](assets/images/testing/html-validation-index.PNG)  
![About Page Validation](assets/images/testing/html-validation-about.PNG)  
![Menu Page Validation](assets/images/testing/html-validation-menu.PNG)  
![Locations Page Validation](assets/images/testing/html-validation-locations.PNG)  
![Gallery Page Validation](assets/images/testing/html-validation-gallery.PNG)  
![FAQ Page Validation](assets/images/testing/html-validation-faq.PNG)  
![Contact Page Validation](assets/images/testing/html-validation-contact.PNG)  
![Feedback Page Validation](assets/images/testing/html-validation-feedback.PNG)  
![Under Construction Validation](assets/images/testing/html-validation-under-construction.PNG)


---

### JavaScript Validation
  
JavaScript was validated using **JSHint**.

The validation process returned warnings related to the use of modern JavaScript features such as `let` and `const`, which are not supported in older JavaScript versions (ES5).

These warnings were reviewed and are expected, as the project uses **ES6+ syntax**, which is supported by all modern browsers.

No unused variables, errors or issues affecting functionality were identified, and the code runs as intended across tested environments. A screenshot is provided as evidence of testing below.

**JavaScript Validation Results:**
- *No errors found*

![JavaScript Validation](assets/images/testing/js-validation.PNG)  

---

## Lighthouse Validation

Performance, Accessibility, Best Practices, and SEO testing was conducted using **Google Lighthouse** within Chrome DevTools. Testing was performed on the deployed site in both **desktop and mobile** modes to reflect real‑world usage.

### Lighthouse Score Reference

| Category | Score Range | Indicator | Explanation |
|--------|------------|-----------|-------------|
| Performance | 90–100 | 🟢 | Fast loading and efficient runtime performance |
| Performance | 50–89 | 🟠 | Moderate performance with room for improvement |
| Performance | 0–49 | 🔴 | Poor performance, likely due to heavy assets |
| Accessibility | 90–100 | 🟢 | Content accessible to most users |
| Best Practices | 90–100 | 🟢 | Follows modern, secure web standards |
| SEO | 90–100 | 🟢 | Strong search‑engine visibility |

---

## Lighthouse Results Summary

### Home Page
- Desktop: Performance 74, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 69, Accessibility 91, Best Practices 100, SEO 100

![Home Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-home-d.png)
![Home Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-home-m.png)

---

### About Page
- Desktop: Performance 80, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 69, Accessibility 95, Best Practices 100, SEO 100

![About Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-about-d.png)
![About Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-about-m.png)

---

### Locations Page
- Desktop: Performance 62, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 68, Accessibility 95, Best Practices 100, SEO 100

![Locations Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-locations-d.png)
![Locations Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-locations-m.png)

---

### Menu Page
- Desktop: Performance 94, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 71, Accessibility 95, Best Practices 100, SEO 100

![Menu Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-menu-d.png)
![Menu Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-menu-m.png)

---

### Tavern Code & FAQ Page
- Desktop: Performance 99, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 85, Accessibility 95, Best Practices 100, SEO 100

![FAQ Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-faq-d.png)
![FAQ Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-faq-m.png)

---

### Gallery Page
- Desktop: Performance 82, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 52, Accessibility 95, Best Practices 100, SEO 100

![Gallery Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-gallery-d.png)
![Gallery Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-gallery-m.png)

---

### Contact Page
- Desktop: Performance 99, Accessibility 96, Best Practices 100, SEO 100
- Mobile: Performance 87, Accessibility 96, Best Practices 100, SEO 100

![Contact Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-contact-d.png)
![Contact Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-contact-m.png)

---

### Feedback / Message Received Page
- Desktop: Performance 98, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 69, Accessibility 95, Best Practices 100, SEO 100

![Feedback Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-feedback-d.png)
![Feedback Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-feedback-m.png)

---

### Under Construction Page
- Desktop: Performance 99, Accessibility 95, Best Practices 100, SEO 100
- Mobile: Performance 69, Accessibility 95, Best Practices 100, SEO 100

![Under Construction Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-under-construction-d.png)
![Under Construction Page Lighthouse Testing - Desktop Results](assets/images/testing/lighthouse-under-construction-m.png)

---

### Performance Considerations and Impact
  
While most pages achieved strong performance scores, some pages recorded lower results, particularly during mobile Lighthouse testing. These outcomes reflect deliberate optimisation decisions made to balance technical performance with real user experience, rather than implementation errors.

- **Image format trade-offs:**  
  Images were initially converted from JPG to WebP to reduce file sizes and improve Lighthouse performance metrics. Following further testing, hero images were retained in WebP format, as they load individually and benefit from improved compression without noticeable delays.

  However, images within the homepage carousel were found to perform differently. While the first (visible) carousel image loaded efficiently, subsequent images converted to WebP introduced slower perceived rendering when multiple images were processed together. As a result, these carousel images were reverted to JPG format to ensure faster visual display.

  This resulted in a context-based approach:
  - WebP is used for hero and lower-priority images where compression improves performance without affecting render speed  
  - JPG is used in multi-image contexts, such as carousel slides, where faster decoding improves perceived performance  

  This approach ensures an effective balance between file size optimisation and user-perceived responsiveness.

- **Image file structure:**  
  Both WebP and JPG versions of all non-logo images are stored within the project in separate folders. This structure allows flexible testing and selective use of formats depending on context, enabling different optimisation strategies across the site.

  While this approach increases file duplication and would not be ideal for a large-scale production system, it provides full control over format selection and supports performance testing and comparison within the scope of the project.

- **Perceived vs measured performance:**  
  Testing demonstrated that improved Lighthouse scores do not always correspond to improved user experience. In particular, some optimisations resulted in slower visual rendering despite better performance metrics, highlighting the difference between measured performance and perceived responsiveness.

- **Lazy loading strategy:**  
  Lazy loading was initially applied to non-visible images to reduce initial load cost. However, this introduced visible delays when scrolling, particularly on image-heavy pages such as the Gallery. Lazy loading was therefore removed from most content images to ensure immediate rendering and smoother interaction.

  Lazy loading was retained in specific cases where it does not negatively impact user experience:
  - small, non-critical images such as icons, where any delay is negligible  
  - tavern popup images, which are not part of the initial page render and only load when triggered by user interaction  

  This approach maintains performance benefits without compromising usability.

- **Image-heavy content:**  
  Pages such as the Home, Gallery, and Locations pages rely on multiple high-quality images to support immersion and visual storytelling. While this enhances the overall experience, it increases load time and impacts Lighthouse performance scores, particularly under mobile conditions.

- **Client-side JavaScript and interactivity:**  
  The Locations page includes JavaScript-driven interactivity such as map markers, popup positioning logic, scroll handling, and viewport adjustment. These features introduce additional runtime processing, which can affect performance scores in Lighthouse, particularly under mobile throttling conditions.

  While this contributes to lower performance metrics compared to simpler pages, these interactions were intentionally implemented to enhance usability, providing contextual information dynamically without requiring page navigation.

- **Simulated mobile constraints:**  
  Lighthouse mobile testing simulates reduced network speeds and CPU performance. As a result, image-heavy and interactive pages tend to show lower performance scores compared to desktop testing.

- **CSS file size:**  
  The project uses a single stylesheet containing styles for all pages. This increases the volume of CSS loaded on each page, including unused rules. While fragmenting the CSS into page-specific files would improve efficiency, this was not implemented due to project scope and complexity.

Despite variation in performance scores, Accessibility, Best Practices, and SEO scores remained consistently high across all pages, demonstrating strong adherence to modern web standards, accessible design, and well-structured content.

It should be noted that perceived image loading performance can also be influenced by the testing device. WebP images require more processing to decode than JPG, which can result in slower rendering on lower-powered hardware, particularly when multiple images are loaded simultaneously.

This was considered during testing, and optimisation decisions were based on observed behaviour within the development environment, prioritising consistent and responsive visual rendering.

#### Observed Performance Improvements

Following the optimisation changes described above, updated Lighthouse testing showed measurable improvements in desktop performance scores across key pages, particularly those affected by image-heavy content and interactivity.

- Home Page:  
![Lighthouse performance improvement for Home Page showing increased performance score](assets/images/testing/lighthouse-home-d-improvement.PNG)

- About Page:  
![Lighthouse performance improvement for About Page showing increased performance score](assets/images/testing/lighthouse-about-d-improvement.PNG)

- Locations Page:  
![Lighthouse performance improvement for Locations Page showing increased performance score](assets/images/testing/lighthouse-locations-d-improvement.PNG)

These results demonstrate that selective optimisation strategies, including context-based image format selection and refinement of lazy loading behaviour, led to improved performance scores without negatively affecting accessibility, best practices, or SEO.

Further performance improvements could have been achieved through more aggressive optimisation strategies, such as extensive lazy loading of images and additional deferral of content. While these approaches improved Lighthouse performance metrics, testing showed that they introduced delays in visual rendering and interaction.

As a result, these strategies were not fully implemented, as they compromised perceived performance and overall user experience. This reinforces the decision to prioritise real-world usability over purely metric-driven optimisation.

---

## Conclusion

All validation and testing tools returned successful results, demonstrating that *The Wayfarer’s Rest* meets modern web standards for structure, styling, accessibility, and search‑engine optimisation. Performance variations are consistent with the project’s visual and interactive design goals and have been correctly identified and documented.