import qrcode

for page in ('index', 'earth', 'kenergy', 'sun', 'water', 'wind'):
    img = qrcode.make(f'gzescape.github.io/{page}', error_correction=qrcode.ERROR_CORRECT_H)
    img.save(f'./qrcodes/{page}.png')
