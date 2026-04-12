import { useState } from 'react'

function home() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ padding: '40px' }}>
            <h1>Главная страница</h1>

            <p style={{ fontSize: '32px' }}>{count}</p>

            <button onClick={() => setCount(count + 5)}>
                +5
            </button>
        </div>
    )
}

export default home