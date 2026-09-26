# Simple-WAM project page

This is a static project page prepared for `https://simple-wam.github.io`. Its page structure, typography, buttons, and collapsible video components are adapted from the open-source [MemoryVLA++ website template](https://github.com/shihao1895/MemoryVLA-PP-Web), which is licensed under CC BY-SA 4.0.

## Local preview

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create the GitHub organization or user `simple-wam` if it does not already exist.
2. Create a public repository named `simple-wam.github.io`.
3. Push the contents of this directory to the repository's `main` branch.
4. In the repository's **Settings → Pages**, select **Deploy from a branch**, branch `main`, directory `/ (root)`.
5. Confirm the deployed page at `https://simple-wam.github.io`.

Before publishing, replace the two “coming soon” buttons in `index.html` with the final arXiv and code URLs, and update the BibTeX entry with the arXiv identifier.

## Main files

- `index.html`: page content and metadata
- `static/css/bulma.min.css`: Bulma framework copied from the MemoryVLA++ template
- `static/css/index.css`: original MemoryVLA++ template styles
- `static/css/simple-wam.css`: Simple-WAM-specific layout and responsive styles
- `static/js/simple-wam.js`: collapsible videos, active section state, and BibTeX copy action
- `assets/images/`: figures converted from the paper
- `assets/videos/simple-wam-overview.mp4`: compressed overview video
- `assets/files/simple-wam-paper.pdf`: downloadable paper
