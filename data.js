// ============================================================
// EDIT THIS FILE to change your lists. One item per line inside
// the [ ] brackets. Keep the quotes " " around each line and a
// comma , after each one (except the very last line in a list).
//
// After editing, just save the file and refresh the page —
// no other code needs to change.
// ============================================================

const DEFAULTS = {

  // Video captions (the on-screen caption/hook text)
  videocaption: [
    "Why didn't anyone tell me this?😭",
    "Wait... this actually works?!😳",
    "I wish I knew this sooner 😩",
    "Nobody talks about this enough?!😤",
    "This changed everything for me 😍",
    "How is this not more popular?🤔",
    "I can't believe this was free?!😱",
    "This should be illegal it's that good 😩🔥",
    "Save this before it's too late ⚠️",
    "This is your sign to try it ✨",
    "Why is no one talking about this?😳",
    "I tried it so you don't have to 😅",
    "This took me way too long to find 😩",
    "Okay this is actually genius?!🧠",
    "Wish someone showed me this years ago 😭",
    "This is not a drill 🚨",
    "You need to see this 👀",
    "This is criminally underrated?!😤",
    "I'm still thinking about this 🤯",
    "This one's a game changer 🙌",
    "Everyone needs to know this ❗",
    "This felt illegal to know 😳",
    "I was today years old when I learned this 😳",
    "This is the trick nobody shares?!🤐",
    "Bookmark this for later 📌"
  ],

  // On-screen CTA text (appears in the last few seconds of the video)
  caption: [
    "How is pinned in the comments",
    "Tutorial's pinned in comment 👉",
    "How's pinned in comments 👉",
    "How is pinned in comments 👉",
    "How's pinned in comments",
    "How is pinned in comments 📌",
    "How to get it is pinned in comments",
    "How is pinned in the comments section",
    "How is sitting in comments",
    "How is in comments",
    "Tutorial pinned in comments 👉",
    "Tutorial pinned in comments 💕",
    "How is in comments 👉",
    "How in comments 👉",
    "How is pinned in comments",
    "Checkout pinned comment for tutorial 👉",
    "How in pinned comment 👉",
    "How is pinned in the comments 📌",
    "How to get coupon steps are in comments 👆",
    "How is pinned in comments 😭",
    "How in comments 👉",
    "How to get coupon code is pinned in comments 👆",
    "How is in comments 👆",
    "How's pinned in the comments 👇",
    "Tutorial is pinned in the comments",
    "How to do it is pinned in comments 👉",
    "How's in the comments section",
    "Tutorial's in comments 👉",
    "How is up in comments 📌",
    "Check the pinned comment for how 👉",
    "How to is pinned below 👇",
    "Full how-to pinned in comments",
    "Steps are pinned in comments 👆",
    "How's stickied in comments",
    "Tutorial pinned below 👇",
    "How's pinned up top in comments",
    "How to get it pinned in comment section 👉",
    "See pinned comment for how 📌"
  ],

  // Pinned comment text. Use {domain} anywhere you want your
  // domain field (top of the page) auto-inserted.
  comment: [
    "Here's how I did it:\n• Go to: {domain} on your phone.\n• Read the instructions carefully.\n• Complete the steps on the page.\n• Claim your discount coupon.",
    "Here's exactly how:\n• Open {domain} on your phone.\n• Follow the instructions closely.\n• Finish the steps shown.\n• Grab your discount coupon.",
    "This is how I got it:\n• Head to {domain} on your phone.\n• Read through the steps carefully.\n• Complete everything on the page.\n• Claim your coupon.",
    "How I did it, step by step:\n• Visit {domain} on your phone.\n• Read each instruction closely.\n• Complete the steps listed.\n• Redeem your discount coupon.",
    "Here's the process:\n• Go to {domain} using your phone.\n• Carefully read the instructions.\n• Finish the steps on the page.\n• Claim your coupon code.",
    "Quick rundown of how I did it:\n• Go to {domain} on your phone.\n• Read the instructions carefully.\n• Work through each step on the page.\n• Claim your coupon.",
    "Here's how it works:\n• Pull up {domain} on your phone.\n• Read the steps closely.\n• Complete what's on the page.\n• Grab your discount.",
    "The steps I followed:\n• Go to {domain} on your phone.\n• Read through everything carefully.\n• Finish the page's steps.\n• Claim your discount code.",
    "Here's how to get it:\n• Open {domain} from your phone.\n• Read each step carefully.\n• Complete the page fully.\n• Redeem your coupon.",
    "For anyone asking, here's how:\n• Go to {domain} on your phone.\n• Carefully follow the instructions.\n• Complete all the steps.\n• Claim the coupon.",
    "Sharing exactly how I did this:\n• Visit {domain} on your phone.\n• Read the instructions fully.\n• Complete each step shown.\n• Get your discount coupon.",
    "Steps to get yours:\n• Go to {domain} on your phone.\n• Read carefully before starting.\n• Finish the steps on the page.\n• Claim your coupon.",
    "Here's the full process:\n• Head over to {domain} on your phone.\n• Read through the instructions.\n• Complete the steps in order.\n• Claim your discount.",
    "This is the exact method:\n• Go to {domain} using your phone.\n• Read each instruction carefully.\n• Complete the page's steps.\n• Redeem the coupon.",
    "Here's what to do:\n• Open {domain} on your phone.\n• Read everything carefully first.\n• Complete the steps as shown.\n• Claim your coupon code.",
    "How to claim yours:\n• Go to {domain} on your phone.\n• Read the full instructions.\n• Complete each step on the page.\n• Grab your coupon.",
    "The process, step by step:\n• Visit {domain} from your phone.\n• Read the instructions thoroughly.\n• Complete the page's steps.\n• Claim your discount coupon.",
    "Here's how I got mine:\n• Go to {domain} on your phone.\n• Read through it carefully.\n• Finish all the steps.\n• Claim the coupon.",
    "Full breakdown of the steps:\n• Open {domain} on your phone.\n• Read the instructions in full.\n• Complete everything listed.\n• Redeem your discount.",
    "Here's how this works:\n• Head to {domain} on your phone.\n• Read the steps carefully.\n• Complete the page.\n• Claim your coupon code."
  ]

};
