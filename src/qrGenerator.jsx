import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import s from './qr.module.css'

export const QrCodeGenerator = () => {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	const onClickHandler = () => {
		setResult(value)
		setValue('')
	}

	const onChangeHandler = (event) => {
		setValue(event.target.value)
		setResult('')
	}

	return (
		<div className={s.container}>

			<input
				type="text"
				value={value}
				onChange={onChangeHandler}
				className={s.input}
				placeholder='введите текст..' />

			<button
				type='button'
				onClick={onClickHandler}
				className={s.button}
			>сгенерировать QR
			</button>

			{result !== '' && (
				<div className={s.qrWrapper}>
					<QRCodeSVG value={result} size={200} />
				</div>
			)}
		</div>
	)
}
