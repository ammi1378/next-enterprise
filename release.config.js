const releaseConfig = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["./assets/*.{json}"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "./assets/a.json", label: "s distribution" }],
      },
    ],
    "@semantic-release/changelog",
  ],
}

module.exports = releaseConfig
