---
areas:
  - science
minscore: 0
---

> [!multi-column|center-fixed]
> > [!div]
> > ```meta-bind-button
> > label: Science
> > style: primary
> > action:
> >   type: js
> >   file: 0 JavaScript/Science.js
> > ```
>
> > [!div]
> > ```meta-bind-button
> > label: History
> > style: default
> > action:
> >   type: js
> >   file: 0 JavaScript/History.js
> > ```
>
> > [!div]
> > ```meta-bind-button
> > label: Literature
> > style: default
> > action:
> >   type: js
> >   file: 0 JavaScript/Literature.js
> > ```

---

> [!multi-column|center-fixed]
> > [!div]
> > `INPUT[number:minscore]`
>
> > [!div]
> > ```meta-bind-button
> > label: Apply
> > style: destructive
> > action:
> >   type: js
> >   file: 0 JavaScript/Apply.js
> > ```

---

> [!multi-column|center-fixed]
> > [!div]
> > ```meta-bind-button
> > label: Subcat One
> > style: default
> > action:
> >   type: js
> >   file: 0 JavaScript/Subcat One.js
> > ```
>
> > [!div]
> > ```meta-bind-button
> > label: Subcat Two
> > style: default
> > action:
> >   type: js
> >   file: 0 JavaScript/Subcat Two.js
> > ```
>
> > [!div]
> > ```meta-bind-button
> > label: Subcat Three
> > style: default
> > action:
> >   type: js
> >   file: 0 JavaScript/Subcat Three.js
> > ```

---

```note-gallery
query: '() OR (["score":>0] OR )   path:"2 Notes/Science/"'
sort: asc
sortBy: name
```