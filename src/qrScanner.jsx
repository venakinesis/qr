import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import s from './qrScanner.module.css'

export const QrCodeScanner = () => {
	const [text, setText] = useState('')

	const onScanHandler = (result) => {
		setText(result[0].rawValue)
	}
	const settings = {
		audio: false,
		finder: false
	}

	return (
		<div className={s.container}>
			<Scanner
				onScan={onScanHandler}
				components={settings}
				styles={{
					container: { width: 200 }
				}}
			/>
			<p className={s.result}>{text}</p>
		</div>
	)
}