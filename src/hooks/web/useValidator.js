import { FormItemRule } from 'element-plus'

export const useValidator = () => {
  const required = (message) => {
    return {
      required: true,
      message: message || '이 항목은 필수 항목입니다'
    }
  }

  const lengthRange = (options) => {
    const { min, max, message } = options

    return {
      min,
      max,
      message: message || `길이는 ${min}에서 ${max}자여야 함`
    }
  }

  const notSpace = (message) => {
    return {
      validator: (_, val, callback) => {
        if (val?.indexOf(' ') !== -1) {
          callback(new Error(message || '공백을 포함할 수 없음'))
        } else {
          callback()
        }
      }
    }
  }

  const notSpecialCharacters = (message) => {
    return {
      validator: (_, val, callback) => {
        if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(val)) {
          callback(new Error(message || '특수 문자를 포함할 수 없음'))
        } else {
          callback()
        }
      }
    }
  }

  const phone = (message) => {
    return {
      validator: (_, val, callback) => {
        if (!val) return callback()
        if (!/^1[3456789]\d{9}$/.test(val)) {
          callback(new Error(message || '올바른 휴대폰 번호를 입력하세요.'))
        } else {
          callback()
        }
      }
    }
  }

  const email = (message) => {
    return {
      validator: (_, val, callback) => {
        if (!val) return callback()
        if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(val)) {
          callback(new Error(message || '올바른 이메일 주소를 입력하세요.'))
        } else {
          callback()
        }
      }
    }
  }

  const maxlength = (max) => {
    return {
      max,
      message: '최대' + max + '자까지 입력 가능합니다.'
    }
  }

  const check = (message) => {
    return {
      validator: (_, val, callback) => {
        if (!val) {
          callback(new Error(message || '이 항목은 필수 항목입니다'))
        } else {
          callback()
        }
      }
    }
  }

  return {
    required,
    lengthRange,
    notSpace,
    notSpecialCharacters,
    phone,
    email,
    maxlength,
    check
  }
}
