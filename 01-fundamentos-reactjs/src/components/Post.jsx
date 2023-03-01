import { Comment } from './Comment.jsx';
import styles from './Post.module.css';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/74387598?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Jorge Candele</strong>    
                        <span>Empreendedor</span>
                    </div>
                </div>

                <time title="12 de Fevereiro às 19hs:36min" dateTime="2023-02-12 19:36:14">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            
               <p>Fala galeraa 👋 </p>
               <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
               <p><a href=""> 👉 jane.design/doctorcare</a></p>.
               <p>
                  <a href="">#novoprojeto</a>{' '}
                  <a href="">#nlw</a>{' '}
                  <a href="">#rocketseat</a>
               </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                  placeholder="Deixe um comentário"
                />

                <footer>
                  <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commenteList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}