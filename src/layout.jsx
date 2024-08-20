import { QrCodeGenerator } from './qrGenerator'
import { QrCodeScanner } from './qrScanner'
export const Layout = () => {
	return (
		<div>
			{/* <QrCodeGenerator /> */}
			<QrCodeScanner />
		</div>
	)
}
