import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

const Uses = () => (
  <Layout>
    <SEO title="Uses" />

    <section className="mt-8 uses-section grid grid-cols-2">
      <div className="uses-list">
        <h2 className="text-xl font-bold">Devices</h2>
        <ul>
          <li>Dell Windows 10 Enterprise labtop</li>
          <li>Ducky One 2 White LED keyboard</li>
          <li>Deathadder Chroma mouse</li>
          <li>Bose SoundSport Wireless earphones</li>
        </ul>
      </div>

      <div className="uses-list">
        <h2 className="text-xl font-bold">Softwares</h2>
        <ul>
          <li>VSCode</li>
          <li>Terminal / Oh My Zsh</li>
          <li>Postman</li>
          <li>Firebase</li>
          <li>GraphiQL</li>
          <li>Google Chrome / Firefox</li>
          <li>BrowserStack</li>
          <li>Git</li>
          <li>f.lux</li>
          <li>Notion</li>
          <li>Spotify</li>
          <li>Slack</li>
          <li>Trello</li>
          <li>Teams</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Figma</li>
          <li>InVision</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Uses
