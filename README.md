# Atom OneDark Theme for Gmail

If your school is giving you an option to choose the dark them for gmail inbox, you might want to try our Atom OneDark theme chrome extetnion.

## Installation

1. Open My extetnion in your Chome-based browser, type in following address and load the page: `chrome://extensions/`

2. Enable `(Developer mode)` there

3. Load Gmail OneDark from `[Load unpacked]`


### Configurations

Usally Gmail offers dark theme and theirs are beautiful. If you want to use Gmail OneDark for specific account, you can do so by modifying `manifest.json`. 

```json
{
    "manifest_version": 3,
    "name": "Gmail Dark Mode",
    "version": "1.0",
    "description": "Apply AtomOne Dark theme to school Gmail.",
    "permissions": ["activeTab", "scripting"],
    "content_scripts": [
      {
        "matches": ["https://mail.google.com/mail/u/1/*"], // Specify user with given number per sign in
        "js": ["libs/jquery.min.js", "libs/gmail.js", "content.js"],
        "css": ["style.css"]
      }
    ]
  }
```


### Check List

***Last updated on 11: 27 pm, Wed, Sept, 25th, 2024***

1. [ - ] Fix errors: Inbox  
a. ( - ) Search box  
b. ( - ) Sidebar  
c. ( - ) Email background  
d. ( - ) Email editor  



[Contribution guidelines for this project](docs/CONTRIBUTING.md) 