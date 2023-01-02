# LZO: Prop String

> Accesses the object's properties via string.

[![Sponsor][sponsor-badge]][sponsor]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![TypeScript version][ts-badge]][typescript-4-9]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

## Installation

```bash
npm install lzo-prop-string OR yarn add lzo-prop-string
```

## Usage

```typescript
import { PropString } from 'lzo-prop-string';

PropString.execute('test.name', { test: { name: 'Lack-Zillions-Over' } }); // Lack-Zillions-Over
```

## API

`PropString.execute<T, R>(text: string, object: T): R`

> Get value of property in object by string

## Backers & Sponsors

Support this project by becoming a [sponsor][sponsor].

## License

Licensed under the MIT. See the [LICENSE](https://github.com/Lack-Zillions-Over/prop-string/blob/main/LICENSE) file for details.

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen]: http://commitizen.github.io/cz-cli/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.9-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12.1-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[gha-badge]: https://github.com/Lack-Zillions-Over/prop-string/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/Lack-Zillions-Over/prop-string/actions/workflows/nodejs.yml
[typescript-4-9]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/Lack-Zillions-Over/prop-string/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/Lack-Zillions-Over
