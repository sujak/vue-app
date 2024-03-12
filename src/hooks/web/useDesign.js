import variables from '@/assets/css/variables.module.scss';

export const useDesign = () => {
  const scssVariables = variables;

  /**
   * @param scope 클래스명
   * @returns 네임스페이스-클래스명을 반환합니다.
   */
  const getPrefixCls = (scope) => {
    return `${scssVariables.namespace}-${scope}`;
  };

  return {
    variables: scssVariables,
    getPrefixCls
  };
};