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

![Home Page Validation](assets/images/testing/html-validation-index.png)  
![About Page Validation](assets/images/testing/html-validation-about.png)  
![Menu Page Validation](assets/images/testing/html-validation-menu.png)  
![Locations Page Validation](assets/images/testing/html-validation-locations.png)  
![Gallery Page Validation](assets/images/testing/html-validation-gallery.png)  
![FAQ Page Validation](assets/images/testing/html-validation-faq.png)  
![Contact Page Validation](assets/images/testing/html-validation-contact.png)  
![Feedback Page Validation](assets/images/testing/html-validation-feedback.png)  
![Under Construction Validation](assets/images/testing/html-validation-under-construction.png)


---

### JavaScript Validation
  
JavaScript was validated using **JSHint**.

The validation process returned warnings related to the use of modern JavaScript features such as `let` and `const`, which are not supported in older JavaScript versions (ES5).

These warnings were reviewed and are expected, as the project uses **ES6+ syntax**, which is supported by all modern browsers.

No unused variables, errors or issues affecting functionality were identified, and the code runs as intended across tested environments. A screenshot is provided as evidence of testing below.

**JavaScript Validation Results:**
- *No errors found*

![JavaScript Validation](assets/images/testing/js-validation.png)  

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
  Images were initially converted from JPG to WebP to reduce file sizes and improve Lighthouse performance metrics. While this improved measured performance, above‑the‑fold WebP images introduced a noticeable delay before rendering. As a result, hero and top-of-page images were reverted to JPG to prioritise faster perceived load times, while WebP was retained for lower-priority images further down the page.

- **Perceived vs measured performance:**  
  Testing demonstrated that improved Lighthouse scores do not always correspond to improved user experience. In particular, some optimisations resulted in slower visual rendering despite better performance metrics, highlighting the difference between measured performance and perceived responsiveness.

- **Lazy loading strategy:**  
  Lazy loading was initially applied to non-visible images to reduce initial load cost. However, this introduced visible delays when scrolling, particularly on image-heavy pages such as the Gallery. Lazy loading was therefore removed from most content images to ensure immediate rendering and smoother interaction.

  Lazy loading was retained in specific cases where it does not negatively impact user experience:
  - **Small, non-critical images such as icons**, where the delay is negligible  
  - **Tavern popup images**, which are not part of the initial page render and only load when triggered by user interaction  

  This approach maintains performance benefits without compromising usability.

- **Image-heavy content:**  
  Pages such as the Home, Gallery, and Locations pages rely on multiple high-quality images to support immersion and visual storytelling. While this enhances the overall experience, it increases load time and impacts Lighthouse performance scores, particularly under mobile conditions.

- **Simulated mobile constraints:**  
  Lighthouse mobile testing simulates reduced network speeds and CPU performance. As a result, image-heavy and interactive pages tend to show lower performance scores compared to desktop testing.

- **Client-side interactivity:**  
  Interactive features such as scroll-reveal animations and JavaScript-driven map popups introduce additional runtime processing. These features were intentionally included to enhance usability and engagement, with a minor impact on performance.

- **CSS file size:**  
  The project uses a single stylesheet containing styles for all pages. This increases the volume of CSS loaded on each page, including unused rules. While fragmenting the CSS into page-specific files would improve efficiency, this was not implemented due to project scope and complexity.

Despite variation in performance scores, **Accessibility, Best Practices, and SEO scores remained consistently high across all pages**, demonstrating strong adherence to modern web standards, accessible design, and well-structured content.

---

## Conclusion

All validation and testing tools returned successful results, demonstrating that *The Wayfarer’s Rest* meets modern web standards for structure, styling, accessibility, and search‑engine optimisation. Performance variations are consistent with the project’s visual and interactive design goals and have been correctly identified and documented.