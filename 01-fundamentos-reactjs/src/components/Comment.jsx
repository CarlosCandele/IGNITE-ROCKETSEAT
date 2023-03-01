import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/74387598?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                          <strong>Jorge Candele</strong>
                          <time title="12 de Fevereiro às 19hs:36min" dateTime="2023-02-12 19:36:14">Cerca de 2hs atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Dev, parabéns!!</p>
                </div>


                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>22</span>
                   </button>
                </footer>
            </div>
            
        </div>
    )
}