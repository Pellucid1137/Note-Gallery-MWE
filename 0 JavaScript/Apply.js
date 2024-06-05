let ngfile = app.vault.getAbstractFileByPath("1 Note Gallery/Note Gallery.md");
let content = await app.vault.read(ngfile);
let minscore = String(app.metadataCache.getFileCache(ngfile).frontmatter["minscore"]);
let newContent = content.replace(/\["score":>\d*?\]/, `["score":>${minscore}]`);
await app.vault.modify(ngfile, newContent);