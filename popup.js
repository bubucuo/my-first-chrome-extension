// 新标签打开网页
$("#open").click(() => {
  chrome.tabs.create({ url: "https://github.com/bubucuo" });
});
