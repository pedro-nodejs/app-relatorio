import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'

export default function App() {
  const [status, setStatus] = useState('testando...')

  useEffect(() => {
    async function testar() {
      const { error } = await supabase.from('relatorios').select('id').limit(1)
      if (error) {
        setStatus('❌ Erro: ' + error.message)
      } else {
        setStatus('✅ Conectado ao Supabase!')
      }
    }
    testar()
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Teste de conexão</h1>
      <p style={{ fontSize: 20 }}>{status}</p>
    </div>
  )
}