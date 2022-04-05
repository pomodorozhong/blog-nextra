const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  footer: (
    <div>
      <hr />
      <a href="https://twitter.com/pomodorozhong" target="_blank">
        Twitter
      </a>{" "}
      ·{" "}
      <a href="https://github.com/pomodorozhong" target="_blank">
        GitHub
      </a>{" "}
      ·{" "}
      <a href="mailto:pomodorozhong@gmail.com" target="_blank">
        pomodorozhong@gmail.com
      </a>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: "help" }}
        >
          CC BY-NC 4.0
        </abbr>{" "}
        <time>{YEAR}</time> © pomodorozhong.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
    </div>
  ),
}
