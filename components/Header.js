import HeaderStyle from '../styles/Header.module.css';

export default () => {
    return (
        <div>
            <h1 className={HeaderStyle.title}>
                <span>WebDev</span> News
            </h1>
            <p className={HeaderStyle.description}>Keep up-to-date with with the latest dev news</p>
            {/* <style jsx>
                {`
                    .title {
                        color: red;
                    }
                `}
            </style> */}
        </div>
    )
}